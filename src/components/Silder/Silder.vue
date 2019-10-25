<template>
  <div class="ynet-silder">
    <nav class="ynet-silder-sidebar">
      <ul class="ynet-silder-nav">
        <div v-for="(route,i) in routes" :key="i">
          <router-link 
            tag="li" class="ynet-silder-nav-item nav-dropdown"
            v-if="
              !route.hidden&&
              route.children&&
              route.children.length>0"
            :to="
              route.path+''+
              route.children[0].path" disabled>
              <div class="ynet-silder-nav-link nav-dropdown-toggle" @click="handleClick">
                  <!-- <Icon :type="route.icon" color="white"/> -->
                  {{ route.name}}
              </div>
              <ul class="ynet-silder-nav-dropdown">
                <li class="ynet-silder-nav-item" 
                  v-for="(child,j) in route.children" :key="j"
                  v-if='!child.hidden' 
                  @click="addActive">
                    <router-link 
                      :to="route.path+'/'+child.path+'/'+child.children[0].path" 
                      class="ynet-silder-nav-link"
                      v-if="!child.hidden&&child.children">
                        <!-- <Icon :type="child.icon" color="white"/> -->
                        {{ child.name}}
                    </router-link>
                    <router-link 
                      :to="route.path+'/'+child.path" 
                      class="ynet-silder-nav-link" 
                      v-else="!child.children">
                        <!-- <Icon :type="child.icon" color="white"/> -->
                        {{ child.name}}
                    </router-link>
                </li>
              </ul>
          </router-link>
          <li class="ynet-silder-nav-item" v-if="!route.hidden&&!route.children">
            <router-link :to="route.path" class="ynet-silder-nav-link" exact>
              <!-- <Icon :type="route.icon" color="white"/> -->
                {{ route.name}}
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