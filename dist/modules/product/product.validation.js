"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Zod schema for TVariant
const variantValidationSchema = zod_1.z.object({
    type: zod_1.z.string().min(1, "Type is required"),
    value: zod_1.z.string().min(1, "Value is required")
});
// Zod schema for TInventory
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number().min(0, "Quantity must be at least 0"),
    inStock: zod_1.z.boolean()
});
// Zod schema for TProduct
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    description: zod_1.z.string().min(1, "Description is required"),
    price: zod_1.z.number().min(0, "Price must be at least 0"),
    category: zod_1.z.string().min(1, "Category is required"),
    tags: zod_1.z.array(zod_1.z.string().min(1, "Tags must not be empty")),
    variants: zod_1.z.array(variantValidationSchema).min(1, "At least one variant is required"),
    inventory: inventoryValidationSchema
});
exports.default = productValidationSchema;
