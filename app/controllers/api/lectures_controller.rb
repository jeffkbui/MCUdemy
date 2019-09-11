class Api::LecturesController < ApplicationController
    # def new
    #     @lecture = Lecture.new
    # end

    # def show
    #     @lecture = Lecture.find(params[:id])
    # end

    # def edit
    #     @lecture = current_user.courses.lectures.find(params[:id])
    # end

    # def index
    #     @lectures = Lectures.all
    # end

    # def create
    #     @lecture = Lecture.new(lecture_params)
    #     @lecture.author_id = current_user.id
    #     if @lecture.save
    #         redirect_to api_lecture_url(@lecture)
    #     else
    #         flash.now[:errors] = @lecture.errors.full_messages
    #         render json: :new
    #     end
    # end

    # def update 
    #     @lecture = current_user.courses.lectures.find(params[:id])
    #     if @lecture.update_attributes(lecture_params)
    #         redirect_to api_lecture_url(@lecture)
    #     else
    #         flash.now[:errors] = @lecture.errors.full_messages
    #         render json: :edit
    #     end
    # end

    # private

    # def lecture_params
    #     params.require(:lecture).permit(:title, :body)
    # end
end
