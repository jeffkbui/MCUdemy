class Api::LecturesController < ApplicationController
    def show
        @lecture = Lecture.find(params[:id])
    end

    def index   
        @lectures = Lecture.all
    end
end
