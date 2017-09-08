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
    PitchCreateUpdateSerializer,
    PitchDetailSerializer,
)


class PitchListAPIView(ListAPIView):
    serializer_class = PitchListSerializer
    queryset = Pitch.objects.all()

class PitchCreateAPIView(CreateAPIView):
    queryset = Pitch.objects.all()
    serializer_class = PitchCreateUpdateSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(
            user=self.request.user,
        )

class PitchDetailAPIView(RetrieveAPIView):
    queryset = Pitch.objects.all()
    serializer_class = PitchDetailSerializer
    lookup_field = 'unique_id'
