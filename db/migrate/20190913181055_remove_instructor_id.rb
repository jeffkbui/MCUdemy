class RemoveInstructorId < ActiveRecord::Migration[5.2]
  def change
    remove_column :courses, :instructor_id
    add_column :courses, :instructor, :string, null: false, presence: true
  end
end
