class EditCoursesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :courses, :student_id
    remove_column :courses, :cart_id
    remove_column :courses, :wishlist_id
  end
end
