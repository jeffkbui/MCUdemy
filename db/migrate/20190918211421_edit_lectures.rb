class EditLectures < ActiveRecord::Migration[5.2]
  def change
    remove_column :lectures, :body
    remove_column :lectures, :author_id
    remove_column :lectures, :duration
    remove_column :lectures, :course_id
  end
end
