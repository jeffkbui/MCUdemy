class Lecture < ApplicationRecord
    validates :title, :body, :author_id, :course_id, :duration, presence: true

    belongs_to :course,
        foreign_key: :course_id,
        class_name: :Course
end
