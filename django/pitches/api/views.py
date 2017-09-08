from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView,
    RetrieveUpdateAPIView
)

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)

from pitches.models import Pitch

# from .permissions import IsOwnerOrReadOnly

from .serializers import (
    PitchListSerializer,
    PitchDetailSerializer,
)


class PitchListAPIView(ListAPIView):
    serializer_class = PitchListSerializer
    queryset = Pitch.objects.all()

class PitchDetailAPIView(RetrieveAPIView):
    queryset = Pitch.objects.all()
    serializer_class = PitchDetailSerializer
    lookup_field = 'unique_id'
