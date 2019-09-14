class AddColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :what_youll_learn, :text, array: true, default: []
    add_column :courses, :requirements, :text, array: true, default: []
    add_column :courses, :course_description, :text
    add_column :courses, :num_lectures, :integer
    add_column :courses, :num_videos, :integer
  end
end
