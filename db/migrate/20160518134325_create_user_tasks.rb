class CreateUserTasks < ActiveRecord::Migration
  def change
    create_table :user_tasks do |t|
      t.text :description
      t.date :due

      t.timestamps null: false
    end
  end
end
