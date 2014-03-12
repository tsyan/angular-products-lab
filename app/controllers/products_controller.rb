class ProductsController < ApplicationController
 # GET /articles.json
  def index
    @products = Product.all
    render json: @products
  end

  def show
    @product = Product.find(params[:id])
    render json: @product
  end

  def create
    @product = Product.new(product_params)
    @product.save
    render json: @product
  end

  private

  def product_params
    params.require(:product).permit(:name, :price, :description)
  end

end
