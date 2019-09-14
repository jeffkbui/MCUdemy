class AddMoretoCourses < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :num_students, :integer
    add_column :courses, :num_reviews, :integer
  end
end
