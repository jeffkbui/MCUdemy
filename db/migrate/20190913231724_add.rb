class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :who_this_course_is_for, :text, array: true, default: []
  end
end
