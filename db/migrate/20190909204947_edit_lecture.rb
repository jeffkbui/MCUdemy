class EditLecture < ActiveRecord::Migration[5.2]
  def change
    add_column :lectures, :course_id, :integer, null: false, presence: true
  end
end
