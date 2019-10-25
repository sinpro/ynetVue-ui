<template>
  <div class="ynet-silder">
    <nav class="ynet-silder-sidebar">
      <ul class="ynet-silder-nav">
        <div v-for="(item,index) in routes" :key="index">
          <router-link 
            tag="li" class="ynet-silder-nav-item nav-dropdown"
            v-if="
              !item.hidden&&
              item.children&&
              item.children.length>0"
            :to="
              item.path+''+
              item.children[0].path" disabled>
              <div class="nav-link nav-dropdown-toggle" @click="handleClick">
                  <!-- <Icon :type="item.icon" color="white"/> -->
                  <span :type="child.icon" color="white">></span>{{ item.name}}
              </div>
              <ul class="nav-dropdown-items">
                <li class="ynet-silder-nav-item" 
                  v-for="child in item.children" 
                  v-if='!child.hidden' 
                  @click="addActive">
                    <router-link 
                      :to="item.path+'/'+child.path+'/'+child.children[0].path" 
                      class="nav-link"
                      v-if="!child.hidden&&child.children">
                        <!-- <Icon :type="child.icon" color="white"/> -->
                        <span :type="child.icon" color="white">></span>{{ child.name}}
                    </router-link>
                    <router-link 
                      :to="item.path+'/'+child.path" 
                      class="nav-link" 
                      v-else="!child.children">
                        <!-- <Icon :type="child.icon" color="white"/> -->
                        <span :type="child.icon" color="white">></span>{{ child.name}}
                    </router-link>
                </li>
              </ul>
          </router-link>
          <li class="ynet-silder-nav-item" v-if="!item.hidden&&!item.children">
            <router-link :to="item.path" class="nav-link" exact>
              <!-- <Icon :type="item.icon" color="white"/> -->
                {{ item.name}}
            </router-link>
          </li>
        </div>
      </ul>
    </nav>
    
  </div>
</template>

<script>
export default {
  name: 'Silder',
  display: 'Silder侧边',
  data () {
    return {
      preCls: 'ynet-Silder'
    }
  },
  props: {
      routes: {
          type: Array
      }
  },
  methods: {
    handleClick(e) {
        e.preventDefault()
        /*e.target.parentElement.classList.toggle('open')*/
        let eOneself = e.target.parentElement;
        eOneself.className.indexOf('open') > 0 ? $(eOneself).removeClass('open') : $(eOneself).addClass('open').siblings().removeClass('open');
    },
    addActive(e) {
        e.preventDefault()
        e.target.parentElement.parentElement.parentElement.classList.add('open')
        let eTwoself=e.target.parentElement.parentElement.parentElement;
        $(eTwoself).siblings('li').removeClass('open');
    }
  }
}
</script>