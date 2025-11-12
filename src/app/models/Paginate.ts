export interface Paginate<T>{
    message: string,
    data: T[],
    pagination: Pagination
}

interface Pagination{
    current_page: number,
    last_page: number,
    per_page: number,
    total: number
}