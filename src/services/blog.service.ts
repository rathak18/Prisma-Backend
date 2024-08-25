import { BlogRepository } from '../repositories/blog.repository';

export class BlogService {
  private blogRepository: BlogRepository;

  constructor() {
    this.blogRepository = new BlogRepository();
  }

  /**
   * Create a new blog
   * @param data - The data for the new blog, including title and content
   * @returns The created blog
   */
  async createBlog(data: { title: string; content: string }) {
    return this.blogRepository.createBlog(data);
  }

  /**
   * Get all blogs
   * @returns An array of all blogs
   */
  async getAllBlogs() {
    return this.blogRepository.getAllBlogs();
  }

  /**
   * Get a blog by ID
   * @param id - The ID of the blog to retrieve
   * @returns The blog with the specified ID, or null if not found
   */
  async getBlogById(id: number) {
    return this.blogRepository.getBlogById(id);
  }

  /**
   * Update a blog by ID
   * @param id - The ID of the blog to update
   * @param data - The new data for the blog
   * @returns The updated blog, or null if not found
   */
  async updateBlog(id: number, data: { title?: string; content?: string }) {
    return this.blogRepository.updateBlog(id, data);
  }

  /**
   * Delete a blog by ID
   * @param id - The ID of the blog to delete
   * @returns A boolean indicating if the deletion was successful
   */
  async deleteBlog(id: number) {
    return this.blogRepository.deleteBlog(id);
  }
}
