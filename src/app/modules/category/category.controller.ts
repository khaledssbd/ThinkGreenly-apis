import catchAsync from '../../utils/catchAsync';
import { httpStatus } from '../../utils/httpStatus';
import sendResponse from '../../utils/sendResponse';
import { CategoryService } from './category.service';

// createCategory
const createCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.createCategoryIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Category is created successfully',
    data: result,
  });
});

// getAllCategories
const getAllCategories = catchAsync(async (req, res) => {
  const result = await CategoryService.getAllCategoriesFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Category list retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const deleteCategory = catchAsync(async (req, res) => {
  await CategoryService.deleteCategory(req.params.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Category deleted successfully",
    meta: undefined,
    data: undefined
  })
})

export const CategoryController = {
  createCategory,
  getAllCategories,
  deleteCategory
};
