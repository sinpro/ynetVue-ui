<template>
  <div class="ynet-silder">
    <nav class="ynet-silder-sidebar">
      <ul class="ynet-silder-nav">
        <template v-for="(itemPar,p) in routes">
          <li class="ynet-silder-nav-item" 
            v-if="!itemPar.hidden&&!itemPar.children"
          >
            <router-link 
              :to="itemPar.path" 
              :class="['ynet-silder-nav-link',itemPar.children?'ynet-silder-nav-link-toggle':'']" exact
            >
              <span class="ynet-silder-icon">
                <ynet-icon :name="itemPar.icon" color="#fff"></ynet-icon>
              </span>
              {{ itemPar.name}}
            </router-link>
          </li>
          <router-link
            :class="[p==currentPar?'open':'','ynet-silder-nav-item']"
            :to="itemPar.path+''+itemPar.children[0].path"
            v-if="!itemPar.hidden&&itemPar.children"
            disabled tag="li"
          >
              <div 
                :class="['ynet-silder-nav-link ynet-silder-link-par',itemPar.children?'ynet-silder-nav-link-toggle':'']" 
                @click="addParActive(p,$event)"
              >
                <span class="ynet-silder-icon">
                  <ynet-icon :name="itemPar.icon" color="#fff"></ynet-icon>
                </span>
                {{ itemPar.name}}
              </div>
              <ul class="ynet-silder-nav-dropdown">
                <template v-for="(itemChi,c) in itemPar.children">
                  <li class="ynet-silder-nav-item" 
                    v-if="!itemChi.hidden&&!itemChi.children"
                  >
                    <router-link 
                      :to="itemPar.path+'/'+itemChi.path" 
                      :class="['ynet-silder-nav-link',itemChi.children?'ynet-silder-nav-link-toggle':'']" exact
                    >
                      <span class="ynet-silder-icon">
                        <ynet-icon :name="itemChi.icon" color="#fff"></ynet-icon>
                      </span>
                      {{itemChi.name}}
                    </router-link>
                  </li>
                  <router-link 
                    :class="[c==currentChi?'open':'','ynet-silder-nav-item']"
                    :to="itemChi.path+''+itemChi.children[0].path"  
                    tag="li" disabled
                    v-if="!itemChi.hidden&&itemChi.children"
                  >
                    <div 
                      :class="['ynet-silder-nav-link ynet-silder-link-chi',itemChi.children?'ynet-silder-nav-link-toggle':'']" 
                      @click="addChiActive(c,$event)">
                      <span class="ynet-silder-icon">
                        <ynet-icon :name="itemChi.icon" color="#fff"></ynet-icon>
                      </span>{{ itemChi.name}}
                    </div>
                    <ul class="ynet-silder-nav-dropdown">
                      <template v-for="(itemGro,g) in itemChi.children">
                        <li class="ynet-silder-nav-item" 
                          v-if="!itemGro.hidden&&!itemGro.children"
                        >
                          <router-link 
                            :to="itemPar.path+'/'+itemChi.path+'/'+itemGro.path" 
                            :class="['ynet-silder-nav-link',itemGro.children?'ynet-silder-nav-link-toggle':'']" exact
                          >
                            <span class="ynet-silder-icon">
                              <ynet-icon :name="itemGro.icon" color="#fff"></ynet-icon>
                            </span>{{itemGro.name}}
                          </router-link>
                        </li>
                        <router-link 
                          :class="[g==currentGro?'open':'','ynet-silder-nav-item']"
                          :to="itemGro.path+''+itemGro.children[0].path"  
                          tag="li" disabled
                          v-if="!itemGro.hidden&&itemGro.children"
                        >
                          <div 
                            :class="['ynet-silder-nav-link ynet-silder-link-gro',itemGro.children?'ynet-silder-nav-link-toggle':'']" 
                            @click="addChiActive(c,$event)">
                            <span class="ynet-silder-icon">
                              <ynet-icon :name="itemGro.icon" color="#fff"></ynet-icon>
                            </span>{{itemGro.name}}
                          </div>
                          <ul class="ynet-silder-nav-dropdown">
                            <template>
                              四级菜单
                            </template>
                          </ul> 
                        </router-link>
                      </template>               
                    </ul>
                  </router-link>
                </template>
              </ul>
          </router-link>
        </template>
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
      preCls: 'ynet-silder',
      currentPar:0,
      currentChi:10,
    }
  },
  props: {
      routes: {
        type: Array
      }
  },
  methods: {
    addParActive(i,e) {
      e.preventDefault()
      this.currentPar=i;
      if((e.target.className).indexOf("ynet-silder-link-par") != -1){
        e.target.parentElement.classList.toggle('open')
      }
      
    },
    addChiActive(i,e) {
      e.preventDefault()
      this.currentChi=i;
      if((e.target.className).indexOf("ynet-silder-link-chi") != -1){
        e.target.parentElement.classList.toggle('open')
      }
    }
  }
}
</script>