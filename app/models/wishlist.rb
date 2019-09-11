class Wishlist < ApplicationRecord
    validates :owner_id, presence: true, uniqueness: true

    belongs_to :user,
        foreigh_key: :owner_id,
        class_name: :User

    has_many :courses,
        foreign_key: :wishlist_id,
        class_name: :Course
end
