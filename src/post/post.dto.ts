export class PostDto {
    title: string
    description: string
    user?: {
        id: number
    }
}