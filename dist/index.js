"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInput = exports.createBlogInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInput = zod_1.default.object({
    name: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8),
});
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8),
});
exports.createBlogInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    published: zod_1.default.boolean(),
});
exports.updateBlogInput = zod_1.default
    .object({
    title: zod_1.default.string().min(1, "Title cannot be empty").optional(),
    content: zod_1.default.string().min(1, "Content cannot be empty").optional(),
})
    .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided for update",
    path: ["_errors"],
});
