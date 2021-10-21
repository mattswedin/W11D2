class Api::TodosController < ApplicationController

    def create
        @todo = Todo.new(todo_params)
        if @todo.save
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def show
        render json: Todo.find_by(id: params[:id])
    end

    def index
        render json: Todo.all
    end

    def destroy
        @todo = Todo.find_by(id: params[:id])
        @todo.destroy
        render json: Todo.all
    end

    def update
        @todo = Todo.find_by(id: params[:id])
        if @todo.update(todo_params)
            render json: Todo.all
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    private
    def todo_params
        params.require(:todo).permit(:title, :body, :done)
    end

end
