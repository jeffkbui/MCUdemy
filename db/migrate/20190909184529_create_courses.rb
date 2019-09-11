class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string :title, presence: true, null: false
      t.text :description, presence: true, null: false
      t.integer :student_id
      t.integer :instructor_id, null: false, presence: true
      t.float :price, null: false, presence: true
      t.integer :duration, null: false, presence: true
      t.integer :cart_id
      t.integer :wishlist_id
      t.timestamps
    end
    add_index :courses, :title, unique: true
  end
end
