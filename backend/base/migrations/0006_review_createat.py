# Generated by Django 4.2.6 on 2024-02-16 07:24

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_alter_product_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='createAt',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
