class Cart < ApplicationRecord
    validates :owner_id, presence: true, unqiueness: true

    belongs_to :user,
        foreigh_key: :owner_id,
        class_name: :User

    has_many :courses,
        foreign_key: :cart_id,
        class_name: :Course
end
