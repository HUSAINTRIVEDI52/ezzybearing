"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "./products";

export interface RfqItem {
  id: string;
  product: Product;
  quantity: number;
  // Legacy flat fields for backwards compatibility
  partNumber: string;
  categoryName: string;
  dimensions: string;
  brands: string;
}

interface RfqContextType {
  items: RfqItem[];
  addToRfq: (product: Product, quantity?: number) => void;
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (id: string, newQtyOrDelta: number) => void;
  removeFromRfq: (id: string) => void;
  removeItem: (id: string) => void;
  clearRfq: () => void;
  isInRfq: (id: string) => boolean;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  totalUniqueCount: number;
  totalItems: number;
  totalUnits: number;
}

const STORAGE_KEY = "ezzi_rfq_cart_v3";

const RfqContext = createContext<RfqContextType | undefined>(undefined);

export function RfqProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<RfqItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Failed to read RFQ items from storage", e);
    }
    setIsHydrated(true);
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch (e) {
        console.warn("Failed to save RFQ items to storage", e);
      }
    }
  }, [items, isHydrated]);

  const addToRfq = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          product,
          partNumber: product.partNumber,
          categoryName: product.categoryName,
          dimensions: `${product.d} x ${product.D} x ${product.B} mm`,
          brands: product.brands.join("/"),
          quantity,
        },
      ];
    });
  };

  const addItem = (product: Product, quantity?: number) => {
    addToRfq(product, quantity || 1);
  };

  const updateQuantity = (id: string, newQtyOrDelta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = Math.max(1, newQtyOrDelta);
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromRfq = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const removeItem = (id: string) => {
    removeFromRfq(id);
  };

  const clearRfq = () => {
    setItems([]);
  };

  const isInRfq = (id: string) => {
    return items.some((i) => i.id === id);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const totalUniqueCount = items.length;
  const totalItems = items.length;
  const totalUnits = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <RfqContext.Provider
      value={{
        items,
        addToRfq,
        addItem,
        updateQuantity,
        removeFromRfq,
        removeItem,
        clearRfq,
        isInRfq,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        totalUniqueCount,
        totalItems,
        totalUnits,
      }}
    >
      {children}
    </RfqContext.Provider>
  );
}

export function useRfq() {
  const context = useContext(RfqContext);
  if (!context) {
    throw new Error("useRfq must be used within an RfqProvider");
  }
  return context;
}
