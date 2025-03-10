import styles from "./styles.module.css";

const CartItemList = ({ items, content, removeItem, qtyItem }) => {z
  const { removeBtnText, QTYLabel } = content || null;
  function getPercent(value, discount) {
    return +value- +value * (discount/100);
  }
  return (
    <div>
      {items.length &&
        items.map(
          (
            { node: { id, merchandise, quantity, sellingPlanAllocation } },
            i
          ) => {
            let totalPrice = merchandise.price.amount;
            if (sellingPlanAllocation?.sellingPlan?.priceAdjustments?.length) {
              let discount =
                sellingPlanAllocation?.sellingPlan.priceAdjustments[0]?.adjustmentValue
                  ?.adjustmentPercentage || 0;
                  totalPrice =getPercent(+merchandise.price.amount, discount)
                }
            return (
              <div className={styles.cartItem} key={i}>
                <img
                  width="200"
                  className={styles.productImage}
                  src={merchandise.image.url}
                  alt={merchandise.image.imageAlt}
                />
                <div className={styles.productBody}>
                  <p className={styles.productName}>
                    {merchandise.product.title}
                    {sellingPlanAllocation?.sellingPlan?.name && (
                      <em>
                        &nbsp;({sellingPlanAllocation?.sellingPlan?.name})
                      </em>
                    )}
                  </p>
                  <p className={styles.productPrice}>€ {parseFloat(totalPrice).toFixed(2)}</p>
                  <div className={styles.productActions}>
                    <div className={styles.productActionsQuantity}>
                      <span className={styles.productActionsQuantityLabel}>
                        {QTYLabel}:&nbsp;
                      </span>
                      <input
                        defaultValue={quantity}
                        type="number"
                        className={styles.qtyInputHolder}
                        min="1"
                        onChange={(event) => {
                          qtyItem(
                            merchandise.id,
                            sellingPlanAllocation?.sellingPlan?.id,
                            id,
                            event.target
                          );
                        }}
                      />
                    </div>
                    <button
                      className={`${styles.productActionsRemove} ${styles.btnHover}`}
                      onClick={() => removeItem(id)}
                    >
                      {removeBtnText}
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
    </div>
  );
};
export default CartItemList;
