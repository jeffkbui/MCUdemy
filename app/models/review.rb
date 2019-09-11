class Review < ApplicationRecord
    validates :title, :body, :rating, :author_id, :course_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :course,
        foreign_key: :course_id,
        class_name: :Course
end
