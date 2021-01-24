export interface Address {
    city: string,
    street: string
}

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    address: Address
    isActive?: boolean
}

export interface Post {
    id: string,
    title: string,
    body: string
    userId?: string
    isActive?: boolean
}

export interface Photo {
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
    isActive?: boolean
}