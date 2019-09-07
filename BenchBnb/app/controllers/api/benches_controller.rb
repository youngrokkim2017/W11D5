class Api::BenchesController < ApplicationController
    before_action :require_logged_in

    def index
        @benches = benches.all
    end

    def create
        @bench = Bench.create(bench_params)
        if @bench.save
            render :show
        else
            render json: @benches.error.full_message, status: 404
        end
    end

    private
    def bench_params
        params.require(:bench).permit(:description, :lat, :lng)
    end
end
