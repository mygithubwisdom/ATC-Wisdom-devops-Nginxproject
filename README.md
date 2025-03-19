I am Wisdom 
# DEPLOYING A STATIC WEB PAGE ON NGINX WEB SERVER

This project involves deploying a simple landing page using **HTML**, **CSS**, and **JavaScript**. The web page is hosted on an NGINX web server and fetched from a GitHub repository. Additionally, **SSH key access** on AWS was configured to ensure secure access to the server.

## Project Overview

- **Web Server:** NGINX
- **Web Page:** Simple landing page built with HTML, CSS, and JavaScript
- **Hosting Platform:** AWS EC2 instance
- **Repository Source:** GitHub
- **Access:** Configured SSH key access

## Configuration Details

### Operating System
- Ubuntu 20.04 LTS

### Allowed Ports
- **SSH:** Port 22 (for secure remote access)
- **HTTP:** Port 80 (for serving web traffic)

### AWS EC2 Instance Configuration
- **OS:** Ubuntu 20.04 LTS
- **Instance Type:** `t2.micro` (Free Tier eligible)
- **Key Pair:** Created or used an existing key (saved `.pem` file for secure access)

## Steps to Deploy

1. **Create an EC2 Instance**:
   - I Launched a new instance on AWS with the above configuration.
   - I setup my security group settings to allow SSH and HTTP traffic (Ports 22 and 80).

2. **Install NGINX**:
   - SSH into the instance using the `.pem` file:
     ```bash
     ssh -i "your-key.pem" ubuntu@<instance-public-ip>
     ```
   - Updated packages and install NGINX:
     ```bash
     sudo apt update
     sudo apt install nginx -y
     ```

3. **Deploy the Landing Page**:
   - Clone your GitHub repository:
     ```bash
     git clone https://github.com/mygithubwisdom/ATC-Wisdom-devops-Nginx.git
     ```
   - I Moveed the web page files to the NGINX web directory:
     ```bash
     sudo cp -r your-repo/* /var/www/html/
     ```

4. **Start NGINX**:
   - I restarted the NGINX server to apply changes:
     ```bash
     sudo systemctl restart nginx
     ```

5. **Access the Web Page**:
   - I opened a browser and navigate to your instance's public IP to view the landing page.

## Notes
-I ensured the `.pem` file is securely stored and never shared.
- for securities, I i regularly update your EC2 instance to avoid security vulnerabilities.
- I will use version control (e.g., Git) to maintain the web page's source files.

---

Happy deployed my landinng page  🎉

