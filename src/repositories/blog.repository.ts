import { PrismaClient, Blog } from '@prisma/client';

export class BlogRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  /**
   * Create a new blog
   * @param data - The data for the new blog
   * @returns The created blog
   */
  async createBlog(data: { title: string; content: string }): Promise<Blog> {
    return this.prisma.blog.create({
      data: {
        title: data.title,
        content: data.content,
      },
    });
  }

  /**
   * Get all blogs
   * @returns An array of all blogs
   */
  async getAllBlogs(): Promise<Blog[]> {
    return this.prisma.blog.findMany();
  }

  /**
   * Get a blog by ID
   * @param id - The ID of the blog to retrieve
   * @returns The blog with the specified ID, or null if not found
   */
  async getBlogById(id: number): Promise<Blog | null> {
    return this.prisma.blog.findUnique({
      where: { id },
    });
  }

  /**
   * Update a blog by ID
   * @param id - The ID of the blog to update
   * @param data - The new data for the blog
   * @returns The updated blog, or null if not found
   */
  async updateBlog(id: number, data: { title?: string; content?: string }): Promise<Blog | null> {
    return this.prisma.blog.update({
      where: { id },
      data: {
        title: data.title,
        content: data.content,
      },
    });
  }

  /**
   * Delete a blog by ID
   * @param id - The ID of the blog to delete
   * @returns A boolean indicating if the deletion was successful
   */
  async deleteBlog(id: number): Promise<boolean> {
    try {
      await this.prisma.blog.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      console.error('Error deleting blog:', error);
      return false;
    }
  }
}
