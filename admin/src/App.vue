<template>
  <component :is="resolveLayout">
    <router-view></router-view>
  </component>
</template>

<script>
import { computed } from '@vue/composition-api'
import { useRouter } from '@/utils'
import Axios from 'axios'
import LayoutBlank from '@/layouts/Blank.vue'
import LayoutContent from '@/layouts/Content.vue'

export default {
  methods: {
    checkAuth: function() {
      Axios
      .get('http://localhost:5000/admin/auth/check')
      .then(response =>{

        if(!response.data.ok && window.location.pathname !="/pages/login"){
          window.location.pathname = "/pages/login"
        }

      })

    },
  },
  components: {
    LayoutBlank,
    LayoutContent,
  },
  setup() {
    const { route } = useRouter()
    const resolveLayout = computed(() => {
      // Handles initial route
      if (route.value.name === null) return null

      if (route.value.meta.layout === 'blank') return 'layout-blank'

      return 'layout-content'
    })

    return {
      resolveLayout,
      
    }
  },
  beforeMount() {
    this.checkAuth();
  },
}
</script>
