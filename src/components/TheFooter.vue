<template>
  <section>
    <div class="footer-content">
      <h2>Contact</h2>
      <div class="contact-information">
        <div class="contact-block">
          <p class="sub-heading">linkedin</p>
          <a
            class="contact-info"
            href="https://www.linkedin.com/in/sharla-ortega/"
            target="_blank"
            rel="noopener noreferrer"
            >sharla-ortega</a
          >
        </div>
        <div class="contact-block">
          <p class="sub-heading">email</p>
          <a href="mailto:haveyoueverfound@gmail.com" class="contact-info"
            >haveyoueverfound@gmail.com
          </a>
        </div>
        <div class="contact-block">
          <p class="sub-heading">phone</p>
          <a class="contact-info">123-456-789</a>
        </div>
        <div class="contact-block">
          <p class="sub-heading">instagram</p>
          <a
            class="contact-info"
            href="https://www.instagram.com/j_slammed/"
            target="_blank"
            rel="noopener noreferrer"
            >j_slammed</a
          >
        </div>
      </div>
    </div>
    <img
      src="../assets/images/footer-hillside.webp"
      alt="hillside of agave plants"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
section {
  min-height: 100lvh;
  /* height: 100lvh; */
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  background-color: var(--green-secondary);
  color: var(--tan);
}

h2 {
  color: var(--tan);
}

img {
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
}

.footer-content {
  margin: var(--content-margin-top) var(--content-margin-left);
}

.contact-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--content-margin-left);
  row-gap: var(--content-margin-left);
}

.contact-info {
}
</style>
