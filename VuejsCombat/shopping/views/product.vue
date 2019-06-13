<!--  -->
<template>
  <div v-if="product">

      <div class="product">
          <div class="product-image">
              <img :src="'../images/' + id + '.jpg'" alt="image">
          </div>
          <div class="product-info">
              <h1 class="product-name">{{product.name}}</h1>
              <div class="product-cost">￥ {{product.cost}}</div>
              <div class="product-add-cart" @click="handleAddToCart">加入购物车</div>
          </div>
      </div>

      <div class="product-desc">
          <h2>产品介绍</h2>
          <img :src="'../images/' + n + '.png'" v-for="n in 10" :key="n">
      </div>
  </div>
</template>

<script>
import product_data from '../product.js';
export default {
  props: {},
  data () {
    return {
        id: parseInt(this.$route.params.id),
        product: null
    };
  },

  components: {},

  computed: {},

  methods: {
      getProduct(){
          setTimeout(()=>{
            //   alert(this.id);
              this.product = product_data.find(item=>item.id === this.id);
          },500)
      },
      handleAddToCart(){
          this.$store.commit('addCart', this.id);
      }
  },
  mounted() {
      this.getProduct();
  },
}

</script>
<style scoped>
  .product{
        width: 25%;
        float: left;
    }
    .product-main{
        display: block;
        margin: 16px;
        padding: 16px;
        border: 1px solid #dddee1;
        border-radius: 6px;
        overflow: hidden;
        background: #fff;
        text-align: center;
        position: relative;
    }
    .product-main img{
        width: 100%;
    }
    h4{
        color: #222;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .product-main:hover h4{
        color: #0070c9;
    }
    .product-color{
        display: block;
        width: 16px;
        height: 16px;
        border: 1px solid #dddee1;
        border-radius: 50%;
        margin: 6px auto;
    }
    .product-cost{
        color: #de4037;
        margin-top: 6px;
    }
    .product-add-cart{
        display: none;
        padding: 4px 8px;
        background: #2d8cf0;
        color: #fff;
        font-size: 12px;
        border-radius: 3px;
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: 5px;
    }
    .product-main:hover .product-add-cart{
        display: inline-block;
    }
</style>