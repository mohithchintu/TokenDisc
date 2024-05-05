import { z } from 'zod'

export const createTweetSchema = z.object({
    tweet: z.string().min(2),
    email: z.string().min(2)
})

export const createCommentSchema = z.object({
    comment: z.string().min(2)
})