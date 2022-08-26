<template>
  <div class='wrapper'>
    <Header />
    <div class='wrapper-content'>
      <section>
        <div class='container'>
          <div class='view-sm isCenter'>
            <router-view />
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
	// eslint-disable-next-line vue/no-reserved-component-names
	components: {Header, Footer}
};
</script>
