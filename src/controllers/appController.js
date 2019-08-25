import AuthLayout from "@/views/layouts/AuthLayout";
import MainLayout from "@/views/layouts/MainLayout";

export default {
  computed: {
    layout() {
    
      return (this.$route.meta.layout || 'auth')+ '-layout';
    }
  },
  components: {
    AuthLayout,
    MainLayout
  }
};
