def main_diagonal_product(matrix):
  # do not intializing product to 0 because otherwise the result would always be 0
  # because any number multipled by 0 equals to 0
    product = 1
    for i in range(len(matrix)):
        product *= matrix[i][i]
    return product
