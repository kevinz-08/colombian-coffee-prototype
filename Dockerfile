# Usa imagen base oficial con Apache y PHP
FROM php:8.2-apache

# Instala Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Establece el directorio de trabajo
WORKDIR /var/www/html

# Copia los archivos del backend (solo el contenido de /public) al DocumentRoot
COPY ./backend/public/ /var/www/html/

# Copia el resto del proyecto (src, vendor, composer, etc.)
COPY ./backend /var/www/backend/

# Habilita reescrituras
RUN a2enmod rewrite

# Permitir .htaccess
RUN sed -i 's!/var/www/html!/var/www/html!g' /etc/apache2/sites-available/000-default.conf && \
    echo '<Directory /var/www/html>\n\
        AllowOverride All\n\
        Require all granted\n\
    </Directory>' >> /etc/apache2/apache2.conf
