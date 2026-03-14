# SEO – Next iteration (universal keywords & meta description)

Use these for Medical Camps and similar pages in the next iteration.

---

## Medical Camps page

### Meta title (universal)
```
Medical Camps | Free Health Checkups | HOMA Clinics
```

### Meta description (universal, ~155 chars)
```
Free medical camps and diabetes checkup camps by HOMA Clinics. View past camps, patient impact, and upcoming dates. Community health drives across India.
```

### Universal keywords (comma-separated for meta keywords / content)
```
medical camp, free health camp, free medical checkup, diabetes checkup camp, community health, health screening, rural health camp, HOMA Clinics, free diabetes camp, medical outreach, patient impact, camp venue, health drive
```

### Open Graph (social)
- **og:title:** Medical Camps | Free Health Checkups | HOMA Clinics  
- **og:description:** Free medical camps and diabetes checkup camps. View past camps, patient impact, and upcoming dates.  
- **og:image:** (use a camp or clinic image from `/public` when available)

---

## Site-wide / brand

### Universal keywords (brand + offering)
```
HOMA Clinics, Dr. Muddu Surendra Nehru, medical camp, franchise, metabolism, diabetes, free checkup, clinic, healthcare, India
```

### Canonical / structure
- Each main section (Medical Camps, Donations, Join us, etc.) should have its own `title`, `description`, `keywords`, and `openGraph` in the page’s `metadata` export.
- Use pattern: `[Page name] | HOMA Clinics` for titles.

---

## File upload (Admin: Add camp)

- **Accepted types:** PNG and JPG only (`image/png`, `image/jpeg`, `image/jpg`).
- **Storage:** Uploaded photos are stored with the camp record (base64 in DB), not in the `public` folder. A future iteration could save files to `public/` or cloud storage and store URLs only.
