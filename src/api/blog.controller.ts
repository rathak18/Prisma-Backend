import { Request, Response } from 'express';
import { BlogService } from '../services/blog.service';

// Create an instance of BlogService
const blogService = new BlogService();

/**
 * Create a new blog
 * @param req - Express Request object
 * @param res - Express Response object
 */
export const createBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate and extract data from request body
    const { title, content } = req.body;

    // Call the service method to create a blog
    const blog = await blogService.createBlog({ title, content });

    // Respond with the created blog and a 201 status code
    res.status(201).json(blog);
  } catch (error) {
    // Handle errors and respond with a 500 status code
    console.error('Error creating blog:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

/**
 * Get all blogs
 * @param req - Express Request object
 * @param res - Express Response object
 */
export const getAllBlogs = async (req: Request, res: Response): Promise<void> => {
  try {
    // Call the service method to get all blogs
    const blogs = await blogService.getAllBlogs();

    // Respond with the list of blogs and a 200 status code
    res.status(200).json(blogs);
  } catch (error) {
    // Handle errors and respond with a 500 status code
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

/**
 * Get a single blog by ID
 * @param req - Express Request object
 * @param res - Express Response object
 */
export const getBlogById = async (req: Request, res: Response): Promise<void> => {
  try {
    // Extract blog ID from request parameters
    const id = parseInt(req.params.id, 10);

    // Call the service method to get the blog by ID
    const blog = await blogService.getBlogById(id);

    if (blog) {
      // Respond with the blog and a 200 status code
      res.status(200).json(blog);
    } else {
      // Respond with a 404 status code if the blog is not found
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    // Handle errors and respond with a 500 status code
    console.error('Error fetching blog:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

/**
 * Update a blog by ID
 * @param req - Express Request object
 * @param res - Express Response object
 */
export const updateBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    // Extract blog ID from request parameters
    const id = parseInt(req.params.id, 10);
    const { title, content } = req.body;

    // Call the service method to update the blog by ID
    const updatedBlog = await blogService.updateBlog(id, { title, content });

    if (updatedBlog) {
      // Respond with the updated blog and a 200 status code
      res.status(200).json(updatedBlog);
    } else {
      // Respond with a 404 status code if the blog is not found
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    // Handle errors and respond with a 500 status code
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

/**
 * Delete a blog by ID
 * @param req - Express Request object
 * @param res - Express Response object
 */
export const deleteBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    // Extract blog ID from request parameters
    const id = parseInt(req.params.id, 10);

    // Call the service method to delete the blog by ID
    const result = await blogService.deleteBlog(id);

    if (result) {
      // Respond with a 204 status code for successful deletion
      res.status(204).end();
    } else {
      // Respond with a 404 status code if the blog is not found
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    // Handle errors and respond with a 500 status code
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
