class Api::CoursesController < ApplicationController
    # def new
    #     @course = Course.new
    # end

    # def show
    #     @course = Course.find(params[:id])
    # end

    # def edit
    #     @course = current_user.courses.find(params[:id])
    # end

    # def index   
    #     @courses = Course.all
    # end

    # def create
    #     @course = Course.new(course_params)
    #     @course.instructor_id = current_user.id
    #     if @course.save
    #         redirect_to api_course_url
    #     else
    #         flash.now[:errors] = @course.errors.full_messages
    #         render json: :new
    #     end
    # end

    # def update
    #     @course = current_user.courses.find(params[:id])
    #     if @course.update_attributes(course_params)
    #         redirect_to api_course_url(@course)
    #     else
    #         flash.now[:errors] = @product.errors.full_messages
    #         render json: :description
    #     end
    # end

    # private

    # def course_params
    #     params.require(:course).permit(:title, :description)
    # end
end
