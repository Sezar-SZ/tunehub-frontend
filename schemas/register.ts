import * as zod from "zod";
import { toTypedSchema } from "@vee-validate/zod";

export const registerSchema = toTypedSchema(
    zod.object({
        email: zod.string().email({ message: "Invalid email" }),
        username: zod
            .string()
            .min(4, { message: "Username must be at least 4 characters long" }),
        password: zod
            .string()
            .min(4, { message: "Password too short" })
            .max(20),
    })
);

export default registerSchema;
