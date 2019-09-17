class Course < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :description, :instructor, :price, :duration, :youtube_code, presence: true

    has_many :lectures,
        foreign_key: :course_id,
        class_name: :Lecture

    has_many :reviews,
        foreign_key: :course_id,
        class_name: :Review
end
