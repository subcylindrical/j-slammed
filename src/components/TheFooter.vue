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
          <a
            class="contact-info"
            href="https://www.linkedin.com/in/leo-ortega-198225139/"
            target="_blank"
            rel="noopener noreferrer"
            >leo-ortega</a
          >
        </div>
        <div class="contact-block">
          <p class="sub-heading">email</p>
          <a href="mailto:haveyoueverfound@gmail.com" class="contact-info"
            >haveyoueverfound@gmail.com
          </a>
          <a href="mailto:agetro@gmail.com" class="contact-info"
            >agetro@gmail.com
          </a>
        </div>
        <div class="contact-block">
          <p class="sub-heading">phone</p>
          <a href="tel:9512184769" class="contact-info">S 951-218-4769</a>
          <a href="tel:9518054136" class="contact-info">L 951-805-4136</a>
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
    <div class="img-wrapper">
      <img
        src="../assets/images/green-hillside.webp"
        alt="hillside of agave plants"
      />
    </div>
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
  /* height: 90lvh; */
  /* height: 100lvh; */
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: var(--secondary);
  color: var(--tan);
}

h2 {
  color: var(--tan);
}

.img-wrapper {
  flex-grow: 1;
}

img {
  width: 100%;
  height: 100%;
  flex-grow: 1;
  object-fit: cover;
}

.footer-content {
  padding: var(--content-margin-top) var(--content-margin-left);
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
  transition: transform 0.05s ease, color 0.05s ease, font-style 0.05s ease;
}

.contact-info:hover {
  transform: translateX(0.5rem);
  color: var(--font-dark);
  font-style: italic;
}
</style>
