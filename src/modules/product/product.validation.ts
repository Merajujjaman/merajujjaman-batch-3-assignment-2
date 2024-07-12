import { z } from "zod";

// Zod schema for TVariant
const variantValidationSchema = z.object({
  type: z.string().min(1, "Type is required"),
  value: z.string().min(1, "Value is required")
});

// Zod schema for TInventory
const inventoryValidationSchema = z.object({
  quantity: z.number().min(0, "Quantity must be at least 0"),
  inStock: z.boolean()
});

// Zod schema for TProduct
const productValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be at least 0"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string().min(1, "Tags must not be empty")),
  variants: z.array(variantValidationSchema).min(1, "At least one variant is required"),
  inventory: inventoryValidationSchema
});

export default productValidationSchema;