class Course < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :description, :instructor_id, :price, :duration, presence: true
    validates :student_id, :cart_id, :wishlist_id

    belongs_to :student, 
        foreign_key: :student_id,
        class_name: :User

    belongs_to :instructor, 
        foreign_key: :instructor_id,
        class_name: :User

    belongs_to :cart,
        foreign_key: :cart_id,
        class_name: :Cart

    belongs_to :wishlist,
        foreign_key: :withlist_id,
        class_name: :Wishlist

    has_many :lectures,
        foreign_key: :course_id,
        class_name: :Lecture

    has_many :reviews,
        foreign_key: :course_id,
        class_name: :Review
end
