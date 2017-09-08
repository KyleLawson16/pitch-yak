from rest_framework.serializers import (
    ModelSerializer,
    HyperlinkedIdentityField,
    SerializerMethodField
)

from pitches.models import Pitch

pitches_detail_url = HyperlinkedIdentityField(
    view_name='api:detail',
    lookup_field='unique_id'
)

class PitchListSerializer(ModelSerializer):
    url = pitches_detail_url
    class Meta:
        model = Pitch
        fields = [
            'url',
            'id',
            'title',
            'pitch',
            'likes',
            'dislikes',
        ]

class PitchDetailSerializer(ModelSerializer):
    user = SerializerMethodField()
    class Meta:
        model = Pitch
        fields = [
            'user',
            'id',
            'title',
            'pitch',
            'likes',
            'dislikes',
        ]

    def get_user(self, obj):
        return str(obj.user.username)
